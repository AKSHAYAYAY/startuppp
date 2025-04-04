
import { Search } from 'lucide-react'
import Form from "next/form"
import SearchFormReset from './SearchFormReset'

const SearchForm = ({query}:{query? :string}) => { 

  return (
      
      <Form action="/" 
     className="search-form"> 
     <input name= "query"
            className='search-input' 
            defaultValue= {query}
            placeholder='Search startups' />

     <div className="flex-gap-2" >{query && <SearchFormReset />} </div> 
     <button type="submit" className='search-btn text-white' > <Search className='size-5'/> </button>


      </Form>
  )
}

export default SearchForm
