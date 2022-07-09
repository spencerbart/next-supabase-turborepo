type Props = {
    label: string,
    type?: string,
    nameAndId: string,
    required?: boolean,
    autoComplete?: string,
    options?: string[],
}

const Input = ({
    label,
    type = 'text',
    nameAndId,
    required = false,
    autoComplete = 'off',
    options,
}: Props) => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-[#505050]">
                {label}
            </label>
            {!options && <input
                type={type}
                name={nameAndId}
                id={nameAndId}
                required={required}
                autoComplete={autoComplete}
                className="mt-1 bg-[#222222] focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-[#505050] text-white rounded-md"
            />}
            {options &&
                <select
                name={nameAndId}
                id={nameAndId}
                required={required}
                autoComplete={autoComplete}
                className="mt-1 block w-full py-2 px-3 border border-[#505050] bg-[#222222] rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-white"
                >
                    {options.map((option) => {
                        return <option key={option}>{option}</option>
                    })}
                    
                </select>
            }
        </div>
    )
}

export default Input