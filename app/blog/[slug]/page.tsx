import PostDetail from "@/app/ui/postdetail";
import Link from "next/link";
import {
  ChevronDoubleLeftIcon
} from '@heroicons/react/24/outline';

export default function BlogDetail({ params }: { params: { slug: string }}) {
  const slug = params.slug;

  return (
    <>
      <main className={`mx-auto lg:mt-[75px] flex w-full lg:w-[768px] overflow-x-hidden`}>
        <div className="w-full h-auto relative px-8 py-16">
          <div className="w-full mb-8">
            <Link className="text-2xl flex gap-4 items-center hover:text-gray-500" href="/blog">
              <ChevronDoubleLeftIcon className="h-[20px] w-[20px]" /> Back
            </Link>
          </div>
          <PostDetail slug={slug} />
        </div>
      </main>
    </>
  );
}
