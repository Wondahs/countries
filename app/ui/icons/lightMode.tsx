import React from 'react';
import type { SVGProps } from 'react';

export function LightMode(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m-1-6v4h2V1zm0 18v4h2v-4zm12-8h-4v2h4zM5 11H1v2h4zm11.24 6.66l2.47 2.47l1.41-1.41l-2.47-2.47zM3.87 5.28l2.47 2.47l1.41-1.41l-2.47-2.47zm2.47 10.96l-2.47 2.47l1.41 1.41l2.47-2.47zM18.72 3.87l-2.47 2.47l1.41 1.41l2.47-2.47z"></path></svg>);
}