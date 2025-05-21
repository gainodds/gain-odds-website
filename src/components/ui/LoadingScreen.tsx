const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center gap-3 h-screen bg-white">
      <img
        src="/logo-icon.svg"
        className="size-20 animate-spin"
        alt=""
        loading="lazy"
      />
      <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold">Comfortry</h1>
    </div>
  );
};

export default LoadingScreen;
