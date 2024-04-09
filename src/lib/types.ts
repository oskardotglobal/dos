import type { BoardProps } from "boardgame.io/react";
import type { GameState } from "$/lib/DosGame";
import type {PlayerID} from "boardgame.io";

export type DosBoardProps = BoardProps<GameState>;
