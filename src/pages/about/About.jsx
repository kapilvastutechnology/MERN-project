
export default function About() {
  return (
    <div className="grid grid-cols-2 grid-rows-[560px] gap-3 mx-15 mt-10 max-sm:grid-cols-1 max-sm:mx-0">
     
      <div className="h-[560px] bg-[url('https://www.w3schools.com/w3images/tablesetting2.jpg')] 
     bg-no-repeat bg-cover rounded-[15px] shadow-lg max-sm:mx-2">
      </div>

      <div>
        <h1 className="text-center text-5xl tracking-[3px] py-4 max-sm:text-center max-sm:text-2xl max-sm:tracking-[2px] max-sm:py-2">About Catering</h1>
        <h2 className="text-center tracking-[5px] text-2xl py-8 max-sm:text-center max-sm:tracking-[2px] max-sm:py-4">Tradition since 1889</h2>
        <p className="px-8 text-[20px] max-sm:px-2 max-sm:text-[15px]">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>

        <p className="px-8 text-[20px]  my-4 text-gray-400 max-sm:px-2 max-sm:text-[15px]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
  
    </div>
  )
}
