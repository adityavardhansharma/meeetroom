import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      {/* Added gradient background, increased rounded corners, and hover effects */}
      <div className="h-[303px] w-full rounded-[30px] bg-hero bg-cover
        transform transition-all duration-300 hover:scale-[1.01]
        shadow-lg border border-purple-1/30">
        <div className="flex h-full flex-col justify-between
          bg-gradient-to-r from-purple-1/20 to-orange-1/20 rounded-[30px]
          max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded-2xl py-2 text-center
            text-base font-normal border border-white/20
            bg-gradient-to-r from-sky-1/30 to-purple-1/30">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl
              bg-gradient-to-r from-white to-sky-1 bg-clip-text text-transparent">
              {time}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;