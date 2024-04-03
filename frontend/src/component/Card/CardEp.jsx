export default function CardTrailer({ nom, trailer, date }) {
  return (
    <div className="bg-background">
      <iframe className="rounded-md " src={trailer} frameborder="700px"></iframe>
      <div className="flex flex-col items-start">
        <div className="flex gap-2 text-xs lg:text-sm">
          <div className="flex gap-1 text-textwhite">
            <h6> S1</h6>
            <h6>E26</h6>
          </div>
          <h6 className="text-textgrey">{date}</h6>
        </div>
        <h4 className="text-md font-bold text-textwhite">{nom}</h4>
      </div>
    </div>
  );
}
