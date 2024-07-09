import { ChatModelCard, ModelProviderCard } from '@/types/llm';

import AnthropicProvider from './anthropic';
import AzureProvider from './azure';
import BaichuanProvider from './baichuan';
import BedrockProvider from './bedrock';
import CohereProvider from './cohere';
import DeepSeekProvider from './deepseek';
import GoogleProvider from './google';
import GroqProvider from './groq';
import MinimaxProvider from './minimax';
import MistralProvider from './mistral';
import MoonshotProvider from './moonshot';
import OllamaProvider from './ollama';
import OpenAIProvider from './openai';
import OpenRouterProvider from './openrouter';
import PerplexityProvider from './perplexity';
import QwenProvider from './qwen';
import StepfunProvider from './stepfun';
import TaichuProvider from './taichu';
import TogetherAIProvider from './togetherai';
import ZeroOneProvider from './zeroone';
import ZhiPuProvider from './zhipu';

export const LOBE_DEFAULT_MODEL_LIST: ChatModelCard[] = [
  OpenAIProvider.chatModels,
  QwenProvider.chatModels,
  ZhiPuProvider.chatModels,
  BedrockProvider.chatModels,
  CohereProvider.chatModels,
  DeepSeekProvider.chatModels,
  GoogleProvider.chatModels,
  GroqProvider.chatModels,
  MinimaxProvider.chatModels,
  MistralProvider.chatModels,
  MoonshotProvider.chatModels,
  OllamaProvider.chatModels,
  OpenRouterProvider.chatModels,
  TogetherAIProvider.chatModels,
  PerplexityProvider.chatModels,
  AnthropicProvider.chatModels,
  ZeroOneProvider.chatModels,
  StepfunProvider.chatModels,
  BaichuanProvider.chatModels,
  TaichuProvider.chatModels,
].flat();

export const DEFAULT_MODEL_PROVIDER_LIST = [
  OpenAIProvider,
  { ...AzureProvider, chatModels: [] },
  QwenProvider,
  OllamaProvider,
  AnthropicProvider,
  CohereProvider,
  DeepSeekProvider,
  GoogleProvider,
  OpenRouterProvider,
  TogetherAIProvider,
  BedrockProvider,
  PerplexityProvider,
  MinimaxProvider,
  MistralProvider,
  GroqProvider,
  MoonshotProvider,
  ZeroOneProvider,
  ZhiPuProvider,
  StepfunProvider,
  BaichuanProvider,
  TaichuProvider,
];

export const filterEnabledModels = (provider: ModelProviderCard) => {
  return provider.chatModels.filter((v) => v.enabled).map((m) => m.id);
};

export { default as AnthropicProviderCard } from './anthropic';
export { default as AzureProviderCard } from './azure';
export { default as BaichuanProviderCard } from './baichuan';
export { default as BedrockProviderCard } from './bedrock';
export { default as CohereProviderCard } from './cohere';
export { default as DeepSeekProviderCard } from './deepseek';
export { default as GoogleProviderCard } from './google';
export { default as GroqProviderCard } from './groq';
export { default as MinimaxProviderCard } from './minimax';
export { default as MistralProviderCard } from './mistral';
export { default as MoonshotProviderCard } from './moonshot';
export { default as OllamaProviderCard } from './ollama';
export { default as OpenAIProviderCard } from './openai';
export { default as OpenRouterProviderCard } from './openrouter';
export { default as PerplexityProviderCard } from './perplexity';
export { default as QwenProviderCard } from './qwen';
export { default as StepfunProviderCard } from './stepfun';
export { default as TaichuProviderCard } from './taichu';
export { default as TogetherAIProviderCard } from './togetherai';
export { default as ZeroOneProviderCard } from './zeroone';
export { default as ZhiPuProviderCard } from './zhipu';
