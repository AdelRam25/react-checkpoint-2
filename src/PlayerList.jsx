
import Player from "./Player";
import { players } from "./players";
export default () => {

  return (
    <div className="grid grid-cols-4 gap-8 py-10 px-6 mt-36">
  {players.map((player) => (
    <Player
      name={player.name}
      team={player.team}
      nationality={player.nationality}
      number={player.number}
      age={player.age}
      imageUrl={player.imageUrl}
      rating={player.rating}
    />
  ))}
</div>

  );
};



