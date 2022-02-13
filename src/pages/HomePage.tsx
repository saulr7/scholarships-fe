import NavBar from "../components/common/NavBar";
import Scholarships from "../components/schorlaship/Scholarships";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <hr className='bg-slate-400' />

      <div className='bg-white p-4 py-12 flex justify-between items-center'>
        <h3 className='text-3xl '>Scholarships</h3>

        <input
          type='text'
          className='w-36 h-8 bg-zinc-200 rounded outline-none p-2'
        />
      </div>
      <hr className='bg-slate-400' />

      <Scholarships />
    </div>
  );
};

export default HomePage;
