"use client";

import { useState } from 'react';
import { Input } from './ui/input';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchInput = () => {
    const [value, setValue] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentTopic = searchParams.get('topic');

    function onSubmit (event: React.KeyboardEvent) {

    }

    return (
        <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            onKeyDown={onSubmit}
            type="search"
            placeholder="Search..."
            className="flex w-full h-full text-sm rounded-full bg-slate-100 focus-visible:ring-slate-200"
        />
    );
};

export default SearchInput;
