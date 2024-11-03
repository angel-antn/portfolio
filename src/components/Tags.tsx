interface TagsProps {
  tags: string[];
  name: string;
}

export const Tags = ({ tags, name }: TagsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {tags.map((tag) => (
        <div
          key={`${name.replaceAll(" ", "_")}_${tag.replaceAll(" ", "_")}`}
          className="px-5 py-1 bg-white bg-opacity-10 rounded-full"
        >
          {tag}
        </div>
      ))}
    </div>
  );
};
