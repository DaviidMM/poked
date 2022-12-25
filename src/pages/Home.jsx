import Button from '../components/Button';
import { setPokemon, setItems } from '../services/firebase/db/index';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Home page</h1>
      {/* <Button color="red" onClick={() => setItems()}>
        Set Items
      </Button> */}
    </div>
  );
}
