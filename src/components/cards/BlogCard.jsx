import Link from 'next/link';
import Author from '../Author';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ data }) => {
  return (
    <div className='rounded-xl border p-4'>
      <Author avatar={data.user.avatar} admin={data.user.admin} name={data.user.name} publishDate={data.updatedAt} />
      <div className='lg:flex lg:gap-3 xl:items-center'>
        <div className='lg:flex-[3]'>
          <Link href={`/blog/${data._id}`}>
            <h3 className='cursor-pointer text-[#292929]'>{data.title}</h3>
          </Link>
          <p className='text-xs leading-relaxed text-gray-600'>{data.snippet}...</p>
          <div className='flex justify-end gap-3 pt-3 text-xs text-gray-600'>
            <p>
              <FontAwesomeIcon icon={faComment} /> {data.comment.length}
            </p>
            <p>|</p>
            <p>6-minute read</p>
          </div>
        </div>
        <div className='hidden xl:block xl:flex-1'>
          <img className='h-full rounded-xl object-cover' src={data.thumbnail} />
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
