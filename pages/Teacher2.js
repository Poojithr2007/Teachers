
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

export default function Example() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>About Pushpa Mam</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-blue-900">
              My favourite teacher is my English teacher. Her name is Miss Pushpa. When she teaches the tough chapters full of Merchant of Venice, Literature, historical references and grammar, she makes the chapter as easy as abcd. Pin drop silence prevails in the class while she teaches.Even the back benchers respond attentively- and perhaps that is her biggest quality, she makes the entire class interact and participate in the lectures. She is not at all partial to the academically bright which makes her a favourite with all the others. Her depth of knowledge is proved by the way she teaches-she starts with an account on the poet or the writer, and then gives us a brief glimpse of the social background and then proceeds. By the time she ends, we have the whole lesson stored in our minds.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
