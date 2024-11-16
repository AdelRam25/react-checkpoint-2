export default (props) => {
  return (
    <div className="w-full h-80 rounded-xl bg-[#E8D881] shadow-lg relative">
      {/* Player Image */}
      <img
        className="w-32 h-32 object-cover rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 border-4 border-[#E8D881] z-10"
        src={props.imageUrl}
        alt={props.name}
      />

      <div className="bg-[#1f1f1f] p-6 pt-24 text-white rounded-b-xl">
        <div className="text-center">
          {/* Player Name */}
          <h2 className="text-2xl font-extrabold text-[#E8D881] mt-20">
            {props.name}
          </h2>

          {/* Club Name */}
          <p className="mt-2 text-lg font-semibold text-white rounded-full">
            Team : {props.team}
          </p>

          {/* Number & Nationality  */}
          <div className="mt-3 flex justify-center text-lg gap-3 text-white">
            <div className="font-semibold text-[#E8D881]"># {props.number}</div>
            <div className="font-semibold">{props.nationality}</div>
          </div>
        </div>

        {/* Stats  */}
        <div className="mt-6 flex justify-between text-sm text-white">
          <div>
            <p>Age: {props.age}</p>
            <p>Actual Team: {props.team}</p>
          </div>

          <div className="text-center">
            <p className="font-semibold text-[#E8D881]">Rating</p>
            <p
              className={`font-bold text-2xl ${
                props.rating >= 86 ? "text-red-500" : "text-white"
              }`}
            >
              {props.rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
