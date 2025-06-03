import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

/**
 * FilterDropdown Component - Reusable filter dropdown for both mobile and desktop
 */
const FilterDropdown = ({
  label,
  value,
  setValue,
  options,
  isMobile = false
}) => (
  <div
    className={`flex flex-col ${
      isMobile ? 'gap-3' : 'gap-2'
    } min-w-0 max-w-full`}
  >
    <span
      className={`text-blaupunkt-primary-dark font-myriad ${
        isMobile
          ? 'text-base font-semibold'
          : 'text-sm font-medium lg:text-base lg:font-light'
      } whitespace-nowrap`}
    >
      {label}:
    </span>
    <div className='relative min-w-0 flex-1 max-w-full'>
      <select
        value={value}
        onChange={e => setValue(e.target.value)}
        className={`w-full max-w-full appearance-none ${
          isMobile
            ? 'bg-white border-2 border-blaupunkt-secondary text-blaupunkt-dark px-4 py-3 hover:border-blaupunkt-primary focus:border-blaupunkt-primary focus:outline-none shadow-sm'
            : 'bg-blaupunkt-secondary text-white px-3 sm:px-4 py-2 hover:bg-blaupunkt-secondary/90'
        } pr-10 rounded-lg font-myriad text-sm font-normal cursor-pointer transition-all duration-200 overflow-hidden truncate`}
        style={{
          maxWidth: '100%',
          minWidth: '0',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className={isMobile ? 'text-blaupunkt-dark bg-white' : ''}
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {option}
          </option>
        ))}
      </select>
      <div
        className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none ${
          isMobile ? 'right-4' : ''
        }`}
      >
        <FiChevronDown
          className={`${isMobile ? 'w-4 h-4' : 'w-3 h-3'}`}
          color={isMobile ? '#1a365d' : 'white'}
        />
      </div>
    </div>
  </div>
)

export default FilterDropdown
