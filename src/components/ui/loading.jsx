import LoadingGif from './assets/loading.gif';

const Loading = () => (
  <div className="w-full flex h-[95vh] items-center">
    <div className="mx-auto">
      <img src={LoadingGif} alt="loading" className="w-[150px] h-[150px]" />
      <p className="text-center -mt-6">Loading...</p>
    </div>
  </div>
);

export default Loading;