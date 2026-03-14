import React from 'react'

type CheckboxProps = {
    className?: string,
    clickHandler?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ className = '', clickHandler = () => '' }) => {
    return (
        <input
            type="checkbox"
            onClick={clickHandler}
            className={`
    hidden
    lg:block
    relative
    w-[20px] h-[20px]
    appearance-none
    rounded-md
    border-2 border-[#B9B9B966]
    bg-transparent
    cursor-pointer
    transition-all duration-200
    checked:border-[#ED0028]
    checked:bg-[#ED0028]
    checked:after:content-['']
    checked:after:absolute
    checked:after:inset-0
    checked:after:m-auto
    checked:after:w-[12px] checked:after:h-[12px]
    checked:after:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]
    checked:after:bg-no-repeat
    checked:after:bg-center
    checked:after:bg-contain ${className}`}
        />
    )
}

export default Checkbox
