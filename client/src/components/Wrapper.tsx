import Head from "next/head"
import React from "react"

interface WrapperProps {
    title: string
}


export const Wrapper: React.FC<WrapperProps> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}