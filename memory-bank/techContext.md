# Technical Context: Obsidian Management Starter Vault

## Technologies Used

### Core Platform
- **Obsidian**: Knowledge management application (v1.x)
- **Markdown**: Primary content format for maximum compatibility
- **JavaScript**: Automation and enhancement scripting
- **JSON**: Configuration and metadata storage

### Essential Obsidian Plugins
1. **QuickAdd** (Required)
   - Template instantiation
   - User input processing
   - Automated workflows
   - Script execution integration

2. **Dataview** (Required)
   - Dynamic content queries
   - Metadata aggregation
   - Real-time content updates
   - Complex filtering and sorting

3. **Templater** (Recommended)
   - Advanced template processing
   - Dynamic content generation
   - Cross-template functionality
   - Enhanced automation capabilities

### Optional Enhancement Plugins
- **Admonitions**: Enhanced callout styling
- **Calendar**: Journal integration
- **Tag Wrangler**: Tag management
- **Advanced Tables**: Table formatting

## Development Setup

### File Structure Requirements
```
Project Root/
├── _system/                 # System namespace (required)
│   ├── scripts/            # JavaScript automation
│   ├── templates/          # Template definitions
│   ├── quickadd/          # QuickAdd configurations
│   └── archive/           # Historical versions
├── Team Members/           # Team data (auto-created)
├── Journal/               # Time-based notes (auto-created)
└── memory-bank/           # Documentation (this system)
```

### Plugin Configuration
1. **QuickAdd Setup**
   - Import templates from `_system/quickadd/templates/`
   - Configure script paths to `_system/quickadd/scripts/`
   - Set up macro triggers for common workflows

2. **Dataview Configuration**
   - Enable JavaScript queries
   - Set automatic refresh intervals
   - Configure metadata processing

3. **Templater Setup**
   - Point template folder to `_system/templates/`
   - Enable script execution
   - Configure trigger hotkeys

### Environment Prerequisites
- Obsidian desktop application (mobile support limited)
- File system write permissions
- JavaScript execution enabled in Obsidian settings

## Technical Constraints

### Platform Limitations
- **File System Dependent**: Requires local file system access
- **Plugin Dependency**: Core functionality requires specific plugins
- **Desktop Primary**: Mobile experience limited by plugin availability
- **Single User**: No built-in collaboration features

### Performance Considerations
- **Large Datasets**: Dataview queries may slow with 100+ team members
- **Script Execution**: JavaScript automation adds processing overhead
- **File Watching**: Real-time updates require system file monitoring
- **Memory Usage**: Complex queries and large vaults consume significant memory

### Compatibility Requirements
- **Obsidian Version**: Minimum v0.15.0 for plugin compatibility
- **Operating System**: Cross-platform (Windows, macOS, Linux)
- **File Encoding**: UTF-8 required for proper character handling
- **Path Length**: Windows path length limitations may affect deep nesting

## Dependencies

### Critical Dependencies
```javascript
// Plugin Dependencies (Required)
QuickAdd >= 0.8.0
Dataview >= 0.5.0

// System Dependencies
Obsidian >= 0.15.0
Node.js (for script development, not runtime)
```

### File Dependencies
- `_system/scripts/*.js` - Core automation functions
- `_system/templates/**/*.md` - Template definitions
- `_system/quickadd/templates/*.md` - QuickAdd-specific templates
- Selection option files for user interfaces

### External Dependencies
- None (fully self-contained within Obsidian ecosystem)

## Tool Usage Patterns

### Script Architecture
```javascript
// Standard Script Pattern
module.exports = {
    entry: (params) => {
        // Input validation
        // Core logic
        // Output generation
        return result;
    }
};
```

### Template Integration
```markdown
<!-- Standard Template Header -->
---
tags: [category, type]
created: {{date}}
modified: {{date}}
---

# {{title}}
<!-- Template content -->
```

### Dataview Query Patterns
```javascript
// Standard Query Structure
```dataviewjs
const pages = dv.pages('"Team Members"')
    .where(p => p.status == "active")
    .sort(p => p.name);

dv.table(["Name", "Role", "Last Update"],
    pages.map(p => [p.file.link, p.role, p.modified]));
```

### QuickAdd Macro Structure
```json
{
    "name": "Template Name",
    "type": "template",
    "command": true,
    "templatePath": "_system/templates/path/template.md",
    "fileNameFormat": {
        "enabled": true,
        "format": "{{value:name}} - {{value:type}}"
    }
}
```

## Development Workflow

### Adding New Templates
1. Create template in appropriate `_system/templates/` subdirectory
2. Add QuickAdd configuration if needed
3. Update any dependent scripts or dataview queries
4. Test template instantiation and content generation

### Script Development
1. Create script in `_system/scripts/`
2. Follow standard module.exports pattern
3. Test with various input scenarios
4. Add error handling and validation
5. Document in appropriate selection options file

### System Maintenance
1. **Regular Backups**: Critical due to local file dependency
2. **Plugin Updates**: Monitor compatibility with Obsidian updates
3. **Performance Monitoring**: Watch for query performance degradation
4. **Archive Management**: Periodically review and clean archive directories

## Integration Architecture

### Data Flow
```
User Input → QuickAdd → JavaScript Script → Template Processing → File Creation
                ↓                            ↓
            Metadata Extraction → Dataview Processing → Dynamic Views
```

### Error Handling Strategy
- **Input Validation**: All scripts validate user input
- **Graceful Degradation**: System functions with missing optional components
- **Error Logging**: JavaScript errors logged to developer console
- **Fallback Templates**: Simple versions available if complex templates fail

### Version Control Integration
- **Git Compatible**: All files are plain text for version control
- **Ignore Patterns**: Obsidian cache and plugin data excluded
- **Merge Friendly**: Markdown format reduces merge conflicts
- **Backup Strategy**: Git serves as primary backup mechanism
