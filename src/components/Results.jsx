// hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResults, useSearchTerm } from 'hooks';
import { useDispatch } from 'react-redux';

// components
import Loading from './Loading';
import ReactPlayer from 'react-player';

// actions
import { getResults } from 'store/actions';

export const Results = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchTerm = useSearchTerm();
  const { data, isLoading, error } = useResults();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        dispatch(getResults(`/search/q=${searchTerm} videos`));
      } else {
        dispatch(getResults(`${location.pathname}/q=${searchTerm}&num=40`));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
  if (error || !!!data) return <p>{error}...</p>;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {data?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {data?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="sm:p-3 p-5"
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
              // eslint-disable-next-line comma-dangle
            )
          )}
        </div>
      );
    case '/news':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {data?.entries?.length &&
            data?.entries?.map(({ id, links, source, title }) => (
              <div key={id} className="md:w-2/5 w-full ">
                <a
                  href={links?.[0].href}
                  target="_blank"
                  rel="noreferrer "
                  className="hover:underline "
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                </a>
                <div className="flex gap-4">
                  <a
                    href={source?.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline hover:text-blue-300"
                  >
                    {' '}
                    {source?.href}
                  </a>
                </div>
              </div>
            ))}
        </div>
      );
    case '/videos':
      return (
        <div className="flex flex-wrap ">
          {data?.results?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </div>
          ))}
        </div>
      );
    default:
      return 'Error...';
  }
};
