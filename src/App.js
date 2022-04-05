
import './App.css';
import './index.css';


function App() {
  const handlePrint = () => {
window.print()
  }
  return (
  <>
<main className='p-5 md: max-w-xl lg:mx-auto bg-white'>
  <header className='flex flex-col items-center justify-center mb-5'>
  <h2 className='font-bold uppercase tracking-wide text-4xl mb-3'>invoicer</h2>

  <div>
    <ul className='flex items-center justify-between flex-wrap'>
      <button className='btn btn-print' onClick={ handlePrint}>print</button>
      <li>Download</li>
      <li>Send</li>
    </ul>
  </div>
  </header>

<section className='flex flex-col items-center justify-end'>
 <p className='text xl uppercase'>Name : <input className='text xl uppercase' type='text'placeholder='Enter Your Name'  / ></p> 
  <p className='text xl uppercase'>Address : <input className='text xl uppercase' type='text'placeholder='Enter Your Address' / ></p>

  </section>

  <section>
    <p className='text xl uppercase'>Client's Name: <input type='text' ></input> </p>
    <p className='text xl uppercase'>Client's Address: <input type='text' ></input></p>
  </section>

  <section>
    <input type="textbox" placeholder='Enter Your Notes Here....'/>
  </section>

<section>
  <h3>Payment Status </h3>
</section>



</main>
  </>
  );
}

export default App;
