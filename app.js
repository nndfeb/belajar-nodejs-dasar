const memoryUsage = process.memoryUsage();
console.table(memoryUsage);
// ┌──────────────┬──────────┐
// │   (index)    │  Values  │
// ├──────────────┼──────────┤
// │     rss      │ 23752704 │
// │  heapTotal   │ 4079616  │
// │   heapUsed   │ 3166424  │
// │   external   │ 1097184  │
// │ arrayBuffers │  10519   │
// └──────────────┴──────────┘
