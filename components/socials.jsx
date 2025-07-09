import React from "react";
import Image from 'next/image';

const Socials = (props) => {
    return (
        <div className='flex flex-row items-center'>
            <a href={`mailto:${props.data.email}`} className='mr-10 transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold py-2 px-8 rounded flex flex-row justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className='pl-2'>Get in touch</span>
            </a>
            <div className='flex flex-row'>
                <a href={props.data.github} target="_blank" rel="noopener noreferrer" className="mr-10 flex flex-row content-center justify-center">
                    <Image src="/logos/github-mark-white.png" alt="GitHub Logo" width={20} height={20} className='object-contain object-top mr-2' />
                    <div className=''>GitHub</div>
                </a>
                <a href={props.data.linkedin} target="_blank" rel="noopener noreferrer" className="mr-10 flex flex-row content-center justify-center">
                    <Image src="/logos/linkedin-mark-white.png" alt="LinkedIn Logo" width={20} height={20} className='object-contain object-top mr-2' />
                    <div className=''>LinkedIn</div>
                </a>
                {props.data.google_scholar && (
                    <a href={props.data.google_scholar} target="_blank" rel="noopener noreferrer" className="flex flex-row content-center justify-center">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5.242 13.769L0 9.224 2.299 6.92l2.943 2.849L5.242 13.77zM24 9.224l-5.242 4.545-2.943-2.848L19.701 6.92 24 9.224zM12.017 0L7.451 4.562l2.943 2.849L12.017 5.72l1.623 1.691 2.943-2.849L12.017 0zM12.017 18.28l-1.623-1.691-2.943 2.849L12.017 24l4.566-4.562-2.943-2.849L12.017 18.28z"/>
                        </svg>
                        <div className=''>Scholar</div>
                    </a>
                )}
            </div>
        </div>
    )
}

export default Socials