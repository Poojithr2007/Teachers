
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

export default function Example() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>About Esther Mam</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-blue-900">
              I am being taught by many teachers in my school. Every subject has a different teacher, but most of all I like my Math teacher. Her name is Lakshmi and we call her Ma’am. She is our class teacher too. She teaches us very well and makes us understand all the sums. She has lots of patience and does not scold us or beat us unnecessarily.She is very strict when it comes to home works. We should be very correct in completing our homework’s or else she would scold us. She makes the sums of maths very simple and explains in such a manner that we all students understand what is being taught and how it could be done.
              Ma’am teaches maths with lots of patience. If we do not understand a problem, she would spent extra time with us and teach till we understand the principal of the sum. In case, if only a few students do not understand, she calls them separately and teaches them and make then understand how it could be done. You could go to her anytime, during school hours for help and support and for asking doubts. She speaks very gently and is always ready to help us, when we have any kind of doubts.She also helps us in activities in school. When there is some kind of programs, she would be there to help us to get ourselves ready for the show. she makes sure that all the sums are made into simple format, so we study well and understand it.She is the best teacher that we have and she guides us through the right path. Though at first we had no special likes, gradually we started liking her and now she is the best teacher for us. With lots of care and understanding and with fun, she makes the class very lively and makes learning maths simple, with shortcuts and simple steps.I love Esther Ma’am and I wish her success.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
