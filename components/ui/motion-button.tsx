'use client'

import { FC } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

interface Props {
  label: string
  variant?: 'primary' | 'secondary'
  classes?: string
  animate?: boolean
  delay?: number
}

const MotionButton: FC<Props> = ({ label, classes }) => {
  return (
  <button
  className={cn(
    'group relative inline-flex h-12 items-center overflow-hidden rounded-full bg-background p-1 outline-none',
    classes
  )}
>
  {/* Background circle */}
  <span
    aria-hidden="true"
    className="absolute left-1 top-1 z-0 h-10 w-10 rounded-full bg-primary transition-all duration-500 ease-out group-hover:w-[calc(100%-0.5rem)]"
  />

  {/* Content */}
  <span className="relative z-10 flex items-center gap-3 px-4 pl-14 pr-6 whitespace-nowrap text-lg font-medium tracking-tight text-foreground transition-colors duration-500 group-hover:text-background">
    
    {/* Icon */}
    <span className="absolute left-2 flex h-6 w-6 items-center justify-center">
      <ArrowUpRight className="size-5 text-background group-hover:text-background" />
    </span>

    {label}
  </span>
</button>
  )
}

export default MotionButton