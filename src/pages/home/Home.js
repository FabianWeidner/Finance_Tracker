import './Home.scss';
import TransactionForm from './TransactionForm';

function Home() {
  return (
    <div className="container">
      <div className="content">transaction list</div>
      <div className="sidebar">
        <TransactionForm />
      </div>
    </div>
  );
}

export default Home;
