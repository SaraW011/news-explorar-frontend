function Preloader() {
  return (
    <div className='preloader__frame'>
      <i className='preloader preloader_active'></i>
      <div className='preloader__message'>Searching for news...</div>
    </div>
  );
}

export default Preloader;
