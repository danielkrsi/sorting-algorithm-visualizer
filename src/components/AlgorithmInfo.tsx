import { SortAlgorithm } from '../types';
import { algorithmData } from '../utils/algorithmInfo';

interface AlgorithmInfoProps {
  algorithm: SortAlgorithm;
}

export default function AlgorithmInfo({ algorithm }: AlgorithmInfoProps) {
  const info = algorithmData[algorithm];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">{info.name}</h2>

      <p className="text-gray-300 mb-6">{info.description}</p>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-400">Time Complexity</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Best:</span>
              <code className="bg-gray-700 px-2 py-1 rounded text-green-400">
                {info.timeComplexity.best}
              </code>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Average:</span>
              <code className="bg-gray-700 px-2 py-1 rounded text-yellow-400">
                {info.timeComplexity.average}
              </code>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Worst:</span>
              <code className="bg-gray-700 px-2 py-1 rounded text-red-400">
                {info.timeComplexity.worst}
              </code>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-purple-400">Space Complexity</h3>
          <code className="bg-gray-700 px-3 py-2 rounded text-purple-300 text-lg inline-block">
            {info.spaceComplexity}
          </code>
        </div>
      </div>
    </div>
  );
}
