"use client";

import { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2, FileText, Activity, BookOpen, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DynamicIcon } from './DynamicIcon';

interface SearchResult {
    id: string;
    type: 'program' | 'resource' | 'solution' | 'resource-step';
    title: string;
    description: string;
    url: string;
    icon?: string;
}

interface ProgramData {
    id?: string;
    name: string;
    icon: string;
    href: string;
}

interface ResourceData {
    id: string;
    title: string;
    slug: string;
}

interface SearchDialogProps {
    isOpen: boolean;
    onClose: () => void;
    programs: ProgramData[];
    resources: ResourceData[];
}

export default function SearchDialog({ isOpen, onClose, programs, resources }: SearchDialogProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Focus input when dialog opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        } else {
            setQuery('');
            setResults([]);
        }
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Debounce query
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);
        return () => clearTimeout(timer);
    }, [query]);

    // Fetch search results
    useEffect(() => {
        const fetchResults = async () => {
            if (!debouncedQuery.trim()) {
                setResults([]);
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/search?q=${encodeURIComponent(debouncedQuery)}`);
                if (res.ok) {
                    const data = await res.json();
                    setResults(data);
                } else {
                    console.error("Failed to fetch search results");
                    setResults([]);
                }
            } catch (error) {
                console.error("Error searching:", error);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResults();
    }, [debouncedQuery]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-24 px-4 bg-black/40 backdrop-blur-sm transition-all duration-300">
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Search Header */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
                    <Search className="w-6 h-6 text-gray-400 shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search programs, resources, features..."
                        className="flex-1 bg-transparent text-lg text-gray-800 placeholder-gray-400 outline-none"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {query && (
                        <button
                            onClick={() => setQuery('')}
                            className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                    <button
                        onClick={onClose}
                        className="p-2 ml-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors bg-gray-50 border border-gray-100"
                    >
                        <span className="text-xs font-medium px-1 uppercase tracking-wider">ESC</span>
                    </button>
                </div>

                {/* Results Area */}
                <div className="max-h-[60vh] overflow-y-auto">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-12 text-gray-400">
                            <Loader2 className="w-8 h-8 animate-spin" />
                        </div>
                    ) : results.length > 0 ? (
                        <div className="p-2">
                            {results.map((result) => (
                                <Link
                                    key={`${result.type}-${result.id}`}
                                    href={result.url}
                                    onClick={onClose}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                                >
                                    <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#023051] shrink-0 group-hover:scale-110 transition-transform">
                                        {result.type === 'program' || result.type === 'solution' ? (
                                            <DynamicIcon name={result.icon || 'Activity'} className="w-5 h-5" />
                                        ) : (
                                            <FileText className="w-5 h-5" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="text-[15px] font-semibold text-gray-900 truncate">
                                                {result.title}
                                            </h4>
                                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 uppercase tracking-wider shrink-0">
                                                {result.type}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                            {result.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : query.trim() ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center px-4">
                            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                                <Search className="w-8 h-8 text-gray-300" />
                            </div>
                            <p className="text-base font-medium text-gray-900 mb-1">No results found</p>
                            <p className="text-sm text-gray-500 max-w-sm">
                                We couldn't find anything matching "{query}". Try adjusting your search terms.
                            </p>
                        </div>
                    ) : (
                        <div className="py-8 px-4 sm:px-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {/* Programs Quick Links */}
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-2">Programs</h3>
                                    <div className="flex flex-col gap-2">
                                        {programs.map(program => (
                                            <Link
                                                key={program.id || program.name}
                                                href={program.href}
                                                onClick={onClose}
                                                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors group"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#023051] group-hover:bg-[#023051] group-hover:text-white transition-colors shrink-0">
                                                    <DynamicIcon name={program.icon || 'Activity'} className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-medium">{program.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Resources Quick Links */}
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-2">Resources</h3>
                                    <div className="flex flex-col gap-2">
                                        {resources.map(resource => (
                                            <Link
                                                key={resource.id}
                                                href={`/resources/${resource.slug}`}
                                                onClick={onClose}
                                                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors group"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#023051] group-hover:bg-[#023051] group-hover:text-white transition-colors shrink-0">
                                                    <BookOpen className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-medium">{resource.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
