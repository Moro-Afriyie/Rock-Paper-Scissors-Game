export interface ClassTypeProp extends PentagonProps {
  classType: string;
}
export interface  PentagonProps {
    handleToggleDisplay?: (value:boolean, icon:string)=>void;
    toggle?:boolean;
}
export interface  GamePageProps extends PentagonProps{
  playerIcon: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  computerIcon: string;
}
export interface  ScoreProps {
  score: number;
  toggle: boolean;
}