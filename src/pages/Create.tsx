/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Gap = () => <div className="mb-7" />

export const Create: FC = () => {
  const initialValues = {
    name: '',
    description: '',
    avatar: '',
    // category: '',
    price: '',
    developerEmail: '',
  }

  const validationSchema = () =>
    Yup.object().shape({
      name: Yup.string().required('Product name is required'),
      description: Yup.string().required('Description is required'),
      avatar: Yup.string().required('Avatar link is required'),
      //   category: Yup.string().required('Category is required'),
      price: Yup.number().required('Price is required'),
      developerEmail: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    })

  const handleSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <div className="container mx-auto w-3/4">
      <br />
      <h1 className="font-medium leading-tight text-center text-4xl mt-0 mb-6 text-black">
        Create Product
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="relative border-b-2 focus-within:border-blue-500 rounded-xl bg-white border-2 border-gray-300 shadow-md">
              <Field
                type="text"
                name="name"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent text-black m-1 p-1"
              />
              <label className="absolute top-0 z-1 duration-300 origin-0 pl-2 pt-2">
                Product name
              </label>
            </div>
            <ErrorMessage name="name" component="p" className="text-red-500" />
            <Gap />

            <div className="relative border-b-2 focus-within:border-blue-500 rounded-xl bg-white border-2 border-gray-300 shadow-md">
              <Field
                type="text"
                as="textarea"
                rows="5"
                name="description"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent text-black m-1 p-1"
              />
              <label className="absolute top-0 z-1 duration-300 origin-0 pl-2 pt-2">
                Description
              </label>
            </div>
            <ErrorMessage
              name="description"
              component="p"
              className="text-red-500"
            />
            <Gap />

            <div className="relative border-b-2 focus-within:border-blue-500 rounded-xl bg-white border-2 border-gray-300 shadow-md">
              <Field
                type="text"
                name="avatar"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent text-black m-1 p-1"
              />
              <label className="absolute top-0 z-1 duration-300 origin-0 pl-2 pt-2">
                Image URL
              </label>
            </div>
            <ErrorMessage
              name="avatar"
              component="p"
              className="text-red-500"
            />
            <Gap />

            <div className="relative border-b-2 focus-within:border-blue-500 rounded-xl bg-white border-2 border-gray-300 shadow-md">
              <Field
                type="text"
                name="price"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent text-black m-1 p-1"
              />
              <label className="absolute top-0 z-1 duration-300 origin-0 pl-2 pt-2">
                Price
              </label>
            </div>
            <ErrorMessage name="price" component="p" className="text-red-500" />
            <Gap />

            <div className="relative border-b-2 focus-within:border-blue-500 rounded-xl bg-white border-2 border-gray-300 shadow-md">
              <Field
                type="text"
                name="developerEmail"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent text-black m-1 p-1"
              />
              <label className="absolute top-0 z-1 duration-300 origin-0 pl-2 pt-2">
                Developer Email
              </label>
            </div>
            <ErrorMessage
              name="developerEmail"
              component="p"
              className="text-red-500"
            />
            <Gap />

            {/* ToDo categories */}

            <div className="form-group">
              <button
                type="submit"
                className=" w-full p-3 bg-white text-black font-medium text-md leading-tight uppercase rounded-xl shadow-md hover:text-white hover:bg-green-700 hover:shadow-lg focus:text-white focus:bg-green-700 focus:shadow-md focus:outline-none focus:ring-0 active:text-white active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
