export interface Props {
  codigo?: string;
  description?: string;
}

export default function Cupom({ codigo, description }: Props) {
  return (
    <div>
      <span>
        {codigo}
        <p>{description}</p>
      </span>
    </div>
  );
}
