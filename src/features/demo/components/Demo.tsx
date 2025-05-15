import React, { useState } from 'react';
// import { File, GitBranch, GitCommit, Search, Github, Twitter, Mail, Globe, Instagram, Linkedin } from 'lucide-react';
// import { Link } from 'react-router-dom';
import DemoBasicCommands from './DemoBasicCommands';
import DemoIntermediateCommands from './DemoIntermediateCommands';
import DemoGitHubCommands from './DemoGitHubCommands';
import DemoGitTips from './DemoGitTips';

const tabs = ['Comandos Básicos', 'Comandos Intermediários', 'Comandos GitHub', 'Dicas e Truques'];

// AuthorProfiles was moved to ./AuthorProfilesDemo.tsx
// ChallengeBadge was moved to ./ChallengeBadgeDemo.tsx
// BasicCommands was moved to ./DemoBasicCommands.tsx
// IntermediateCommands was moved to ./DemoIntermediateCommands.tsx
// GitHubCommands was moved to ./DemoGitHubCommands.tsx
// GitTips was moved to ./DemoGitTips.tsx

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <DemoBasicCommands />;
      case 1:
        return <DemoIntermediateCommands />;
      case 2:
        return <DemoGitHubCommands />;
      case 3:
        return <DemoGitTips />;
      default:
        return null;
    }
  };

  return (
    <section className="gh-section" id="demo">
      <div className="gh-container">
        <div className="gh-header">
          <span className="gh-badge-primary">Demonstração Interativa</span>
          <h2 className="gh-title">Veja Como Funciona</h2>
          <p className="gh-description">
            Explore os recursos da nossa Planilha de Comandos Git com esta prévia interativa.
          </p>
        </div>

        <div className="gh-tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`gh-tab ${activeTab === index ? 'gh-tab-active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="gh-content">{renderTabContent()}</div>
      </div>
    </section>
  );
};

export default Demo;
