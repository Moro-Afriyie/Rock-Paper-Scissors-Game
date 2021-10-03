export interface ClassTypeProp extends PentagonProps {
  classType: string;
}
export interface  PentagonProps {
    handleToggleDisplay: (value:boolean, icon:string)=>void;
}
export interface  GamePageProps extends PentagonProps{
  iconSelected: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}
