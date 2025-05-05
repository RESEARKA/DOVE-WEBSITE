---
layout: home
title: Documentation
permalink: "/docs/index.html"
description: Technical documentation for the DOVE Token, including smart contract information, integration guides, and API documentation.
meta:
  image: /assets/images/og-docs.jpg
  url: https://dovechain.org/docs/
---

<div class="container mx-auto px-4 py-16 max-w-7xl">
  <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">DOVE Token Documentation</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <a href="#smart-contracts" class="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
      <h2 class="text-xl font-semibold mb-2">Smart Contracts</h2>
      <p class="text-gray-400">Technical specifications and audits of DOVE token contracts</p>
    </a>
    <a href="#developer-apis" class="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
      <h2 class="text-xl font-semibold mb-2">Developer APIs</h2>
      <p class="text-gray-400">Integration guides and API reference documentation</p>
    </a>
    <a href="#charity-integration" class="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
      <h2 class="text-xl font-semibold mb-2">Charity Integration</h2>
      <p class="text-gray-400">How charitable donations are processed and verified</p>
    </a>
  </div>

  <div id="smart-contracts" class="bg-gray-900 rounded-lg p-8 mb-8 shadow-lg">
    <h2 class="text-2xl font-semibold mb-4">Smart Contracts</h2>
    <div class="mb-6">
      <h3 class="text-xl font-medium mb-3">DOVE Token Contract</h3>
      <p class="mb-3">The DOVE token is an ERC-20 token deployed on Base with a charitable transaction fee mechanism.</p>
      <div class="bg-gray-800 p-4 rounded-lg mb-4">
        <p class="font-mono text-sm mb-2">Contract Address: 0x1234567890abcdef1234567890abcdef12345678</p>
        <p class="font-mono text-sm mb-2">Network: Base (Chain ID: 8453)</p>
        <p class="font-mono text-sm">Token Standard: ERC-20</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="#" class="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition">View on BaseScan</a>
        <a href="#" class="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition">View Contract Source</a>
      </div>
    </div>
    
    <div class="mb-6">
      <h3 class="text-xl font-medium mb-3">Charity Treasury Contract</h3>
      <p class="mb-3">The treasury contract collects and distributes charitable donations to verified charity wallets.</p>
      <div class="bg-gray-800 p-4 rounded-lg mb-4">
        <p class="font-mono text-sm mb-2">Contract Address: 0xabcdef1234567890abcdef1234567890abcdef12</p>
        <p class="font-mono text-sm mb-2">Network: Base (Chain ID: 8453)</p>
        <p class="font-mono text-sm">Features: Multi-sig authorization, transparent ledger</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="#" class="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition">View on BaseScan</a>
        <a href="#" class="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition">View Contract Source</a>
      </div>
    </div>
    
    <div>
      <h3 class="text-xl font-medium mb-3">Governance Contract</h3>
      <p class="mb-3">The governance contract enables DOVE holders to vote on charity selection and protocol upgrades.</p>
      <div class="bg-gray-800 p-4 rounded-lg mb-4">
        <p class="font-mono text-sm mb-2">Contract Address: 0x7890abcdef1234567890abcdef1234567890abcd</p>
        <p class="font-mono text-sm mb-2">Network: Base (Chain ID: 8453)</p>
        <p class="font-mono text-sm">Governance Model: Token-weighted voting</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="#" class="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition">View on BaseScan</a>
        <a href="#" class="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition">View Contract Source</a>
      </div>
    </div>
  </div>

  <div id="developer-apis" class="bg-gray-900 rounded-lg p-8 mb-8 shadow-lg">
    <h2 class="text-2xl font-semibold mb-4">Developer APIs</h2>
    <p class="mb-6">Integrate DOVE token into your applications using our developer tools and APIs:</p>
    
    <div class="mb-6">
      <h3 class="text-xl font-medium mb-3">DOVE.js SDK</h3>
      <p class="mb-3">A JavaScript library for interacting with DOVE token contracts:</p>
      <div class="bg-gray-800 p-4 rounded-lg mb-4">
        <p class="font-mono text-sm mb-2">npm install @dovechain/dovejs</p>
      </div>
      <div class="mb-4">
        <a href="#" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition mr-3">SDK Documentation</a>
        <a href="#" class="inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-full transition">GitHub</a>
      </div>
    </div>
    
    <div class="mb-6">
      <h3 class="text-xl font-medium mb-3">GraphQL API</h3>
      <p class="mb-3">Query DOVE token data, transactions, and charity statistics:</p>
      <div class="bg-gray-800 p-4 rounded-lg mb-4">
        <p class="font-mono text-sm mb-2">Endpoint: https://api.dovechain.org/graphql</p>
      </div>
      <div class="mb-4">
        <a href="#" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition mr-3">API Documentation</a>
        <a href="#" class="inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-full transition">GraphQL Playground</a>
      </div>
    </div>
    
    <div>
      <h3 class="text-xl font-medium mb-3">Webhooks</h3>
      <p class="mb-3">Receive real-time notifications for DOVE events:</p>
      <div class="bg-gray-800 p-4 rounded-lg mb-4">
        <p class="font-mono text-sm mb-2">Supported events: Transfers, Donations, Governance actions</p>
      </div>
      <div>
        <a href="#" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition">Webhook Documentation</a>
      </div>
    </div>
  </div>

  <div id="charity-integration" class="bg-gray-900 rounded-lg p-8 shadow-lg">
    <h2 class="text-2xl font-semibold mb-4">Charity Integration</h2>
    <p class="mb-6">Documentation for charities interested in receiving donations through the DOVE protocol:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="border border-gray-700 rounded-lg p-4">
        <h3 class="text-xl font-medium mb-2">Eligibility Requirements</h3>
        <ul class="list-disc pl-6 space-y-1">
          <li>Registered charity status verification</li>
          <li>Transparent reporting practices</li>
          <li>Wallet setup and security requirements</li>
          <li>Community governance approval</li>
        </ul>
      </div>
      <div class="border border-gray-700 rounded-lg p-4">
        <h3 class="text-xl font-medium mb-2">Integration Process</h3>
        <ul class="list-disc pl-6 space-y-1">
          <li>Application submission</li>
          <li>Technical onboarding</li>
          <li>Community vote period</li>
          <li>Funds distribution setup</li>
        </ul>
      </div>
    </div>
    
    <div class="text-center">
      <a href="#" class="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition">Apply as a Charity Partner</a>
    </div>
  </div>
</div>
