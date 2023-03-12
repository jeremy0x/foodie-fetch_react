import './App.scss';
import Header from './components/Header';
import FoodQuotes from './components/FoodQuotes';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className='relative flex min-h-screen flex-col bg-gradient-to-br from-slate-800 to-slate-900 font-sans text-white'>
      <div className='container mx-auto px-4'>
        <Header />
        <main className='mb-72 flex-grow'>
          <div className='header mt-28 mb-4 text-center'>
            <h1 className='hero-text anim-up mb-6 text-3xl font-bold md:text-4xl'>
              Find{' '}
              <span className='bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent'>
                Recipes
              </span>{' '}
              with the{' '}
              <span className='mb-2 bg-gradient-to-r from-amber-500 to-emerald-600 bg-clip-text text-transparent'>
                Ingredients
              </span>{' '}
              You Have! <span className='whitespace-nowrap'>🧅🍅</span>
            </h1>
            <FoodQuotes />
          </div>

          {/* == Search bar == */}
          <form className='search-bar anim-up mx-auto mb-8 max-w-4xl py-4'>
            <label
              htmlFor='search'
              className='sr-only mb-2 text-sm font-medium text-white'
            >
              Search
            </label>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                {/* Search icon */}
                <svg
                  aria-hidden='true'
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='search-bar'
                className='block w-full rounded-lg border border-gray-600 bg-gray-700 p-4 pl-10 text-sm text-white placeholder-gray-400 outline-none focus:border-amber-500 focus:ring-amber-500'
                placeholder='Enter an ingredient to search recipes 🥗...'
                required
                autoComplete='off'
              />
              <button
                type='submit'
                className='search-btn absolute right-2.5 bottom-2.5 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition duration-300 ease-in-out hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-400 active:bg-amber-700'
                id='search-btn'
              >
                Search
              </button>
            </div>
          </form>

          <SearchResults />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
