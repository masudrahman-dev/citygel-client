import React from 'react'
import { Helmet } from 'react-helmet'
import Category from 'components/Category'


const CategoriesPage = () => {
    return (
        <div className='relative z-10 w-[100%] h-[100vh]'>
            <Helmet>
                <title>Citygel</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Category/>
            
        </div>
    )
}

export default CategoriesPage
