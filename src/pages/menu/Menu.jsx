
export default function Menu() {
  return (
    <div className="grid grid-cols-2 grid-rows-[560px] gap-3 mx-15 mt-10 max-sm:grid-cols-1 max-sm:mx-0 max-sm:mt-2">
      <div>
        <h1 className="text-center text-5xl tracking-[3px] py-4 max-sm:text-2xl max-sm:tracking-[2px] max-sm:py-2 max-sm:text-center">Our Menu</h1>

    <div className="max-sm:mx-3">
    <h1 className="tracking-[6px] mt-7 text-2xl max-sm:tracking-[2px] max-sm:mt-3 max-sm:xl ">Bread Basket</h1>
    <p class="mt-4 text-gray-400">Assortment of fresh baked fruit breads and muffins 5.50</p>
     
    <h1 className="tracking-[6px] mt-7 text-2xl max-sm:tracking-[2px] max-sm:mt-3 max-sm:xl">Honey Almond Granola with Fruits</h1>
    <p class="mt-4 text-gray-400">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

    <h1 className="tracking-[6px] mt-7 text-2xl max-sm:tracking-[2px] max-sm:mt-3 max-sm:xl">Belgian Wffle</h1>
    <p class="mt-4 text-gray-400">Vanilla flavored batter with malted flour 7.50</p>

    <h1 className="tracking-[6px] mt-7 text-2xl max-sm:tracking-[2px] max-sm:mt-3 max-sm:xl">Scrambled eggs</h1>
    <p class="mt-4 text-gray-400">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>

    <h1 className="tracking-[6px] mt-7 text-2xl max-sm:tracking-[2px] max-sm:mt-3 max-sm:xl">Blueberry Pancakes</h1>
    <p class="mt-4 text-gray-400">With syrup, butter and lots of berries 8.50</p>
    </div>

      </div>

      <div className="h-[560px] bg-[url('https://www.w3schools.com/w3images/tablesetting.jpg')] 
     bg-no-repeat bg-cover rounded-[15px] shadow-lg max-sm:mx-2">
      </div>
    </div>
  )
}
