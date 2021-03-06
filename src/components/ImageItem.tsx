const ImageItem = ({ source }: { source: string }) => {
  return (
    <div className='three wide column'>
      <img className='ui centered mini image' alt={source} src={source} />
    </div>
  );
};

export default ImageItem;
