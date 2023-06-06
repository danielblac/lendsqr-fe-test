import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode
}
export default function NavLink({href, children, ...props}: Props) {
    const { asPath } = useRouter();

    const isActive = href === asPath || href === props.as;

  return (
    <Link href={href}  {...props} className={`${isActive ? 'border-r-3 md:text-secondary-200 border-design-200 pr-2 md:border-4 md:border-secondary-200 md:rounded-md md:px-2 md:py-1' : ""}`}>
        {children}
    </Link>
  )
}