import { FC } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ICategories } from 'requests'

interface ICategoriesDropdown {
  options: ICategories[]
  selectedCategories: string[]
  // eslint-disable-next-line no-unused-vars
  handleSelect: (value: string) => void
}

export const CategoriesDropdown: FC<ICategoriesDropdown> = ({
  options,
  selectedCategories,
  handleSelect,
}) => (
  <div className="flex justify-between m-10 max-w-full ">
    <div className="w-3/12 lg:w-6/12 md:w-4/12 sm:w-3/12 relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left shadow-md">
      <p className="overflow-hidden truncate ">
        {selectedCategories.length > 0 ? (
          <> {selectedCategories.join(', ')}</>
        ) : (
          'All categories'
        )}
      </p>
    </div>

    <div className="w-8/12 lg:w-4/12 md:w-6/12 sm:w-8/12">
      <Listbox
        as="div"
        className="space-y-1"
        value={selectedCategories}
        // Its a bug of Listbox. In fact we have  value: string not string[]
        onChange={(value: any) => handleSelect(value)}
      >
        {({ open }) => (
          <div className="relative">
            <span className="inline-block w-full rounded-md shadow-sm ">
              <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white shadow-md pl-3 pr-10 py-2 text-left  transition ease-in-out duration-150">
                <span className="block truncate">Categories</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </Listbox.Button>
            </span>

            <Transition
              unmount={false}
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
            >
              <Listbox.Options
                static
                className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
              >
                {options.map(({ id, name }) => {
                  const selected = !!selectedCategories.find(el => el === name)

                  return (
                    <Listbox.Option key={id} value={name}>
                      {({ active }) => (
                        <div
                          className={`${
                            active ? 'text-white bg-blue-600' : 'text-gray-900'
                          } cursor-default select-none relative py-2 pl-8 pr-4`}
                        >
                          <span
                            className={`${
                              selected ? 'font-semibold' : 'font-normal'
                            } block truncate`}
                          >
                            {name}
                          </span>
                          {selected && (
                            <span
                              className={`${
                                active ? 'text-white' : 'text-blue-600'
                              } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  )
                })}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  </div>
)
