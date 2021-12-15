import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiSelector } from "react-icons/hi";

const control = [
  { id: 0, name: "Top 20", gridCount: 20 },
  { id: 1, name: "Top 40", gridCount: 40 },
  { id: 2, name: "Top 69", gridCount: 69 },
  { id: 3, name: "Top 100", gridCount: 100 },
  { id: 4, name: "Collage", gridCount: 0},
];

export default function GridControl() {
  const [selected, setSelected] = useState(control[0]);
  const [state, setState] = useState({rows: 0, columns: 0})

  function handleChange(event:any) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  
  const { rows, columns } = state;

  useEffect(() => {
    if (selected === control[4]) {
    const updateSelected = [
      ...control,
      {
        id: 4,
        name: "Collage",
        gridCount: rows * columns
      }
    ];
    console.log(updateSelected)
    setSelected(updateSelected[4]);
    }
  }, [selected, rows, columns])


  return {
    selected,
    renderGridControl: (
      <div className="p-2 rounded-md grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <HiSelector
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-0"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-100 dark:bg-gray-900 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {control.map((control: any, controlIdx: any) => (
                  <Listbox.Option
                    key={controlIdx}
                    className={({ active }) =>
                      `${
                        active ? "text-purple-900 bg-purple-500" : "text-gray-900"
                      }
                              cursor-default select-none relative py-2 pl-10 pr-4 text-black dark:text-white`
                    }
                    value={control}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {control.name}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? "text-purple-600" : "text-purple-600"
                            }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <HiCheck className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>

            {selected == control[4] && (
              <div>
                <label>
                  <span className="text-black dark:text-white">Rows:</span>
                  <input
                    className="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 w-full p-1.5 shadow-sm border focus:outline-none rounded-md"
                    type="number"
                    id="collage-rows"
                    min="0"
                    max="12"
                    placeholder="e.g 5"
                    name="rows"
                    value={state.rows}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <span className="text-black dark:text-white">Columns:</span>
                  <input
                    className="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 w-full p-1.5 shadow-sm border focus:outline-none rounded-md"
                    type="number"
                    id="collage-columns"
                    min="0"
                    max="12"
                    placeholder="e.g 5"
                    name="columns"
                    value={state.columns}
                    onChange={handleChange}
                  />
                </label>
              </div>
            )}
          </div>
        </Listbox>
      </div>
    ),
  };
}
