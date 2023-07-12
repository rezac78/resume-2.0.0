'use client'
import React from 'react';
interface ReloadProps {
        alert: boolean;
}

export default function Reload(props: ReloadProps) {
        return (
                <>
                       {props.alert ? <div className="CenterText"><h1 data-text="Loading...">Loading...</h1></div> : null}
                </>

        )
}
