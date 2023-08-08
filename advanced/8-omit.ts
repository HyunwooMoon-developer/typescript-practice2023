{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetaData = Omit<Video, 'url' | 'data'>;

  const getVideo = (id: string): Video => {
    return {
      id,
      title: 'video',
      url: 'https://google.com',
      data: 'byte-data...',
    };
  };

  const getVideoMetaData = (id: string): VideoMetaData => {
    return {
      id,
      title: 'hello',
    };
  };
}
