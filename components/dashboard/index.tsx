import Button from "../shared/button";

const Dashboard = () => {
  return (
    <>
      <div
        className="w-full h-screen flex justify-start items-start flex-col bg-blue-50
      p-4"
      >
        <div className="w-full mb-10">
          <Button link="/" className="w-full text-center">
            Users
          </Button>
        </div>
        <div className="w-full grid grid-cols-4 gap-3">
          <Button link="/">Mehr</Button>
          <Button link="/">Mehr</Button>
          <Button link="/">Mehr</Button>
          <Button link="/">Mehr</Button>
          <Button link="/">Mehr</Button>
          <Button link="/">Mehr</Button>
          <Button link="/">Mehr</Button>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
