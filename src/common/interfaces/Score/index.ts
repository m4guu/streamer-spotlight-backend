interface Score {
  likes: { id: string; userId: string }[];
  dislikes: { id: string; userId: string }[];
}

export default Score;
