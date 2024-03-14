import Image from "next/image";
import { ImageSrc } from "../../model/invitation-model";
import { concatBaseUrl } from "../../utils/string-util";
import { Input } from "../ui/input";
import Card from "../card";

export default function SourceView({
  src,
  onChange,
  title,
}: {
  src: ImageSrc;
  title?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (arg0: File) => void;
}) {
  const source = concatBaseUrl(src);
  return (
    <Card>
      <div className="text-sm capitalize">{title}</div>
      <div className="h-2" />
      <Image key={source} alt="" src={source} width={200} height={200} />
      <div className="h-2" />
      <Input
        type="file"
        accept="image/*"
        value={undefined}
        onChange={(event) => {
          const file = event.target.files?.item(0);
          if (!file) return;
          onChange(file);
        }}
      />
    </Card>
  );
}
