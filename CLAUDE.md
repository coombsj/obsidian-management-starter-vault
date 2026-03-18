# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Obsidian Management Starter Vault** designed for team managers to organize team member information, track development, conduct one-on-ones, and manage performance reviews. The vault uses Obsidian's linking system with JavaScript automation and templates for streamlined team management workflows.

## System Architecture

### Core Structure
- **Areas/**: PARA-method areas including Team-Management, Professional-Development, Technical-Excellence, Communities-of-Practice
- **Projects/**: Active projects, completed projects, and innovation ideas
- **Resources/**: Templates, scripts, automation tools, and reference materials
- **Archive/**: Deprecated content and historical records

### Key Technologies
- **Obsidian Vault**: Markdown-based knowledge management system
- **Templater Plugin**: JavaScript templating with `tp.*` syntax
- **Dataview Plugin**: Dynamic content queries and tables
- **QuickAdd Plugin**: Automated content creation workflows
- **JavaScript Scripts**: Custom automation in `Resources/scripts/` and `Resources/quickadd/scripts/`

## Essential Commands

### Template Usage
- **Create Team Member**: Use QuickAdd (Ctrl/Cmd + P → "Quick Add Team Member")
- **Daily Note**: Ctrl/Cmd + P → "Daily notes: Open today's daily note" 
- **Insert Templates**: Alt + E → Select template type

### Content Management
- **Global Search**: Ctrl/Cmd + Shift + F
- **Quick Open**: Ctrl/Cmd + O
- **Command Palette**: Ctrl/Cmd + P
- **Link Creation**: `[[` to create internal links
- **Tag Creation**: `#` to create tags

## Team Management Workflow

### Team Member Structure
Each team member gets a dedicated folder in `Areas/Team-Management/Team/` containing:
- Main profile page with dataview aggregations
- Career path tracking
- Communication preferences  
- Contact information
- One-on-one meeting notes
- Stay interview documentation
- Year-in-review performance data

### Core Callout Types
The system uses structured callouts with metadata for tracking:
- `highlight` - Achievements and successes
- `challenge` - Issues and obstacles  
- `demo` - Presentations and showcases
- `follow-up` - Action items and next steps
- `personal-note` - Individual observations
- `professional-notes` - Work-related documentation
- `one-on-one` - Meeting discussions

### Callout Format Example
```markdown
> [!example] [demo::[[Team Member Name|Team Member Name]]] 
> Description of demo participation.
> [year::"2024"] [quarter::"4"] [week::"47"]
```

## Key Scripts and Automation

### JavaScript Functions
- **`team_member_selection.js`**: Reads from "Team Member Selection Options.md" to populate team member dropdowns
- **`teamnamequickadd.js`**: QuickAdd integration for rapid team member creation
- **Template Scripts**: Various callout and dataview generation scripts in `Resources/scripts/`

### Template System
- **Team Member Templates**: Complete profile setup with linked sections
- **Callout Templates**: Structured notes with metadata for dataview queries
- **Dataview Templates**: Dynamic content aggregation across team members
- **Periodic Templates**: Daily and weekly note structures

## Configuration Files

### Team Member Management
- **Team Member Selection Options.md**: Master list of team members for dropdown selection
- Format: `- Display Name|Short Form` (one per line)

### Obsidian Configuration
- **`.obsidian/community-plugins.json`**: Lists all enabled plugins
- Key plugins: dataview, templater-obsidian, obsidian-tasks-plugin, khoj, obsidian-git

## Dataview Query Patterns

### Common Query Structure
```javascript
LIST L.text
FLATTEN file.lists AS L  
WHERE contains(L.[callout-type], [[Team Member Name]])
AND contains(L.year, "2024")
SORT L.week ASC
```

### Typical Metadata Fields
- `year`, `quarter`, `week` - Temporal tracking
- `highlight`, `challenge`, `demo`, `one-on-one` - Callout types
- Team member links using `[[Team Member Name|Display Name]]` format

## Navigation System

### MOC (Maps of Content) Structure
- **00 - Master MOC**: Central navigation hub
- **10 - Team Management MOC**: Team-focused workflows
- **20 - Projects MOC**: Project organization
- **30 - Areas MOC**: Life/work area management
- **40 - Journal MOC**: Daily notes and reflection
- **50 - Templates MOC**: All template access
- **60 - Automation MOC**: Scripts and workflows
- **70 - Resources MOC**: Tools and references

### Quick Access Patterns
- Use `Home.md` as the main dashboard
- MOCs provide structured navigation to content areas
- Templates are organized by type and use case

## Development Best Practices

### Template Creation
- Use Templater syntax `<%*` for JavaScript execution
- Include metadata fields for dataview integration
- Follow consistent naming patterns for team members
- Utilize the `tp.user.*` custom functions for team member selection

### Script Development  
- JavaScript modules should use `module.exports` pattern
- Integration with QuickAdd requires specific settings object structure
- Team member selection scripts read from designated option files
- File operations use Obsidian's vault API (`app.vault.read()`)

### Content Organization
- Maintain PARA method structure (Projects, Areas, Resources, Archive)
- Use consistent folder naming with meaningful prefixes
- Implement MOC system for navigation and discoverability
- Archive deprecated content rather than deletion

## AI Integration

The vault includes **Khoj plugin** for AI-assisted content creation and analysis. The system is designed to leverage AI for:
- Template and report generation
- Workflow examples creation
- Year-end report analysis with performance continuum placement
- Context-aware content suggestions

Note: Khoj may have context from multiple vaults, so localization of file context may be needed for accurate AI interactions.