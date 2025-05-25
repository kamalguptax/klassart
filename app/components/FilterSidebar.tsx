// components/FilterSidebar.js

const value = "true";

export default function FilterSidebar() {
    
  return (
    <div className="w-72 p-5 bg-white">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Filters
      </h2>

      {/* Orientation */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-blue-600 mb-2">Orientation</h3>
        {[
          ['Square', 289, true],
          ['Widescreen', 548],
          ['Portrait', 548],
          ['Traditional', 548],
          ['Vertical', 548],
          ['Horizontal', 548],
          ['Social post', 548],
          ['Standard', 548],
          ['Classic', 548],
        ].map(([label, count, checked], i) => (
          <label key={i} className={`flex items-center ${checked ? 'text-black font-semibold' : 'text-gray-400'} mb-1`}>
            <input type="checkbox" defaultChecked={value === "true"} className="form-checkbox text-blue-600" />
            <span className="ml-2 text-sm">{label}</span>
            <span className="ml-auto text-sm">{count}</span>
          </label>
        ))}
      </div>

      {/* Style / Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-blue-600 mb-2">Style / Categories</h3>
        {[
          ['Artistic Styles', 289, true],
          ['Modern Illustration', 548],
          ['Cartoon Styles', 548],
          ['Photorealistic Styles', 548],
          ['Cultural Styles', 548],
          ['Experimental Styles', 548],
        ].map(([label, count, selected], i) => (
          <label key={i} className={`flex items-center ${selected ? 'text-black font-semibold' : 'text-gray-400'} mb-1`}>
            <input type="radio" name="style" defaultChecked={value === "true"} className="form-radio text-blue-600" />
            <span className="ml-2 text-sm">{label}</span>
            <span className="ml-auto text-sm">{count}</span>
          </label>
        ))}
      </div>

      {/* Subcategories */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-blue-600 mb-2">Subcategories</h3>
        <div className="mb-2 text-black font-semibold">Van Gogh</div>
        <label className="flex items-center text-black font-semibold mb-1">
          <input type="checkbox" defaultChecked className="form-checkbox text-blue-600" />
          <span className="ml-2 text-sm">Starry Night</span>
          <span className="ml-auto text-sm">289</span>
        </label>
        <label className="flex items-center text-gray-400 mb-1">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-sm">Sunflowers</span>
          <span className="ml-auto text-sm">548</span>
        </label>

        {/* Add more artist options */}
        {['Picasso', 'Monet', 'Da Vinci', 'Rembrandt'].map((artist, i) => (
          <label key={i} className="flex items-center text-gray-400 mb-1">
            <input type="radio" name="artist" className="form-radio" />
            <span className="ml-2 text-sm">{artist}</span>
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-blue-600 mb-2">Price</h3>
        {[
          ['Up To ₹500', 289, true],
          ['₹501 - ₹1,999', 548],
          ['₹2,000 - ₹4,999', 548],
          ['Above ₹5,000', 548],
        ].map(([label, count, checked], i) => (
          <label key={i} className={`flex items-center ${checked ? 'text-black font-semibold' : 'text-gray-400'} mb-1`}>
            <input type="checkbox" defaultChecked={value === "true"} className="form-checkbox text-blue-600" />
            <span className="ml-2 text-sm">{label}</span>
            <span className="ml-auto text-sm">{count}</span>
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 py-2 border rounded-lg text-gray-400">Clear</button>
        <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg">Apply</button>
      </div>
    </div>
  );
}
